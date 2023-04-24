package main

import (
    "fmt"
    "errors"

    abi "github.com/filecoin-project/go-state-types/abi"
    builtin "github.com/filecoin-project/specs-actors/actors/builtin"
    "github.com/filecoin-project/specs-actors/actors/runtime"
    "github.com/filecoin-project/go-state-types/cbor"
    "github.com/filecoin-project/go-address"
)

const (
    Method_CreateProject = abi.MethodNum(2)
)

type SustainActor struct {
    Projects []Project
}

type Project struct {
    Name               string
    Country            string
    Description        string
    Latitude           string
    Longitude          string
    TargetCarbonOffset uint64
    CarbonOffsetRemoved uint64
    Deadline           uint64
    TotalDonationsReceived uint64
    ImageCID           string
}

func (a *SustainActor) CreateProject(rt runtime.Runtime, params *Project) *abi.EmptyValue {
    rt.ValidateImmediateCallerIs(builtin.InitActorAddr)

    if params.TargetCarbonOffset <= 0 {
        rt.Abortf(exitcode.ErrIllegalArgument, "Target carbon offset should be greater than zero.")
    }

    if params.Deadline <= uint64(rt.CurrEpoch()) {
        rt.Abortf(exitcode.ErrIllegalArgument, "Deadline should be in future.")
    }

    var st SustainActor
    rt.StateReadonly(&st)

    for _, project := range st.Projects {
        if project.Name == params.Name {
            rt.Abortf(exitcode.ErrIllegalArgument, "Project with the same name already exists.")
        }
    }

    rt.StateTransaction(&st, func() {
        st.Projects = append(st.Projects, *params)
    })

    return nil
}

func (a *SustainActor) Exports() []interface{} {
    return []interface{}{
        2: a.CreateProject,
    }
}

var _ abi.Invokee = (*SustainActor)(nil)

func main() {
    fmt.Println("Sustain Actor on Filecoin Virtual Machine (FVM)")
}
