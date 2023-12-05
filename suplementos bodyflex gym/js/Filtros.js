$(document).ready(
    function() {

        let productos=["Iso","proteina","HD","creatina","Monohidratada","Vector","Protein","pre-entreno","aminoacidos","post","elite","mass","tech","power","Bcaa","capsulas","Golden"];


        $( "#palabra" ).autocomplete({
            source: productos,
            minlength: 3
        });

        $('.card').hide();


        $('#btnProteinas').click(
            function() {
                $('.card').hide();
            $('.proteina').show();
            }
            );

            $('#btnpre-entreno').click(
                function() {
                    $('.card').hide();
                $('.pre-entreno').show();
                }
                );

                $('#btncreatina').click(
                    function() {
                        $('.card').hide();
                    $('.creatina').show();
                    }
                    );

                    $('#btnbusqueda').click(
                        function() {
                        
                            let productos=document.getElementById('palabra').value;

                            if(productos=="Iso"){
                                $('.card').hide();
                                $('.Iso').show();
                            }

                            if(productos=="HD"){
                                $('.card').hide();
                                $('.HD').show();
                            }

                            if(productos=="proteina"){
                                $('.card').hide();
                                $('.proteina').show();
                            }

                            if(productos=="creatina"){
                                $('.card').hide();
                                $('.creatina').show();
                            }

                            if(productos=="Monohidratada"){
                                $('.card').hide();
                                $('.Monohidratada').show();
                            }

                            if(productos=="Vector"){
                                $('.card').hide();
                                $('.Vector').show();
                            }

                            if(productos=="Protein"){
                                $('.card').hide();
                                $('.Protein').show();
                            }

                            if(productos=="pre-entreno"){
                                $('.card').hide();
                                $('.pre-entreno').show();
                            }

                            if(productos=="aminoacidos"){
                                $('.card').hide();
                                $('.aminoacidos').show();
                            }

                            if(productos=="post"){
                                $('.card').hide();
                                $('.post').show();
                            }

                            if(productos=="elite"){
                                $('.card').hide();
                                $('.elite').show();
                            }

                            if(productos=="mass"){
                                $('.card').hide();
                                $('.mass').show();
                            }

                            if(productos=="tech"){
                                $('.card').hide();
                                $('.tech').show();
                            }

                            if(productos=="power"){
                                $('.card').hide();
                                $('.power').show();
                            }

                            if(productos=="Bcaa"){
                                $('.card').hide();
                                $('.Bcaa').show();
                            }

                            if(productos=="capsulas"){
                                $('.card').hide();
                                $('.capsulas').show();
                            }

                            if(productos=="Golden"){
                                $('.card').hide();
                                $('.Golden').show();
                            }
                        }
                        );

    }

);