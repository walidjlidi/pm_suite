import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import client from "../../api/client";

const AddProject = () => {
    const { handleSubmit, register, errors, control } = useForm();


    const onSubmit = values => {
        return client('/api/project/add', { body: values })
            .then((response) => {
                console.log(response);
            });
    }

    return (
        <main className="login-form">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-8 mx-auto">
                        <div className="card mx-auto">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}  method="POST">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right">Name</label>
                                        <div className="col-md-6">
                                            <input
                                                className={`form-control ${
                                                    errors.name ? "is-invalid" : ""
                                                }`}
                                                name="name"
                                                ref={register({
                                                    required: "Required",
                                                })}
                                            />
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right">Summary</label>
                                        <div className="col-md-6">
                                            <input
                                                className={`form-control ${
                                                    errors.summary ? "is-invalid" : ""
                                                }`}
                                                name="summary"
                                                ref={register}
                                            />
                                            {errors.summary && errors.summary.message}
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right">Commentary</label>
                                        <div className="col-md-6">
                                            <input
                                                className={`form-control ${
                                                    errors.commentary ? "is-invalid" : ""
                                                }`}
                                                name="commentary"
                                                ref={register}
                                            />
                                            {errors.commentary && errors.commentary.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right">Commentary</label>
                                        <div className="col-md-6">
                                            <Controller
                                                as={ReactDatePicker}
                                                control={control}
                                                valueName="selected" // DateSelect value's name is selected
                                                onChange={([selected]) => selected}
                                                name="start_date"
                                                className="form-control"
                                                placeholderText="Select date"
                                            />
                                            {errors.startDate && errors.startDate.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right">Deadline</label>
                                        <div className="col-md-6">
                                            <Controller
                                                as={ReactDatePicker}
                                                control={control}
                                                valueName="selected" // DateSelect value's name is selected
                                                onChange={([selected]) => selected}
                                                name="deadline"
                                                className="form-control"
                                                placeholderText="Select date"
                                            />
                                            {errors.deadline && errors.deadline.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label text-md-right"></label>
                                        <div className="col-md-6">
                                            <button type="submit"  className="btn btn-primary" >Add</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddProject;
