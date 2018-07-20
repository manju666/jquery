$(function () {
            $(".submit").click(function ({

                        var isvalid = $("#regform").validate({

                            rules: {
                                usn: {
                                    required: true,
                                },
                                name: {
                                    required: true,
                                },
                                email: {
                                    required: true,
                                    email: true,
                                },
                                mobile: {
                                    required: true,
                                    minlength: 10,
                                    maxlength: 10,
                                },
                                branch: {
                                    required: true,
                                },
                                percentage: {
                                    required: true,
                                    min: 50,
                                    max: 100,
                                },
                            },
                            messages: {

                                usn: {
                                    required: "USN cannot be emplty",
                                },
                                name: {
                                    required: "Name cannot be emplty",
                                },
                                email: {
                                    required: "Email cannot be emplty",
                                },

                                mobile: {
                                    required: "mobile cannot be emplty",
                                },
                                branch: {
                                    required: "Branch cannot be emplty",
                                },
                                percentage: {
                                    required: "Percentage cannot be emplty",
                                },




                            },



                        });


                    }).form;
