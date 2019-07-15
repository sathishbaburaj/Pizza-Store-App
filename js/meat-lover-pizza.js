var APIKey = "6166d06636850c987ca6129da7d7625f";
        var APPID = "fc22aa95";
        var foodURL = "https://trackapi.nutritionix.com/v2/search/instant?query=BBQ chicken";
        var nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

        $.ajax({
            url: foodURL,
            method: "GET",
            headers: {
                "x-app-id": APPID,
                "x-app-key": "6166d06636850c987ca6129da7d7625f"
            },
        }).then(function (foodsResponse) {
            console.log(foodsResponse);
            $.ajax({
                url: nutritionURL,
                method: "POST",
                headers: {
                    "x-app-id": APPID,
                    "x-app-key": "6166d06636850c987ca6129da7d7625f"
                },
                data: jQuery.param({ "query": "meat lover pizza" })
            }).then(function (nutritionResponse) {

                $(".nutrition").html("<h3>" + 'Meat Lover Pizza' + " Nutrition Facts</h3>");
                $(".r1col1").append("calories:");
                $(".r1col2").append(nutritionResponse.foods[0].nf_calories + '%'+'<br>')
                $(".r2col1").append("cholesterol:");
                $(".r2col2").append(nutritionResponse.foods[0].nf_cholesterol + '%'+'<br>')
                $(".r3col1").append("potassium:");
                $(".r3col2").append(nutritionResponse.foods[0].nf_potassium + '%'+'<br>')
                $(".r4col1").append("protein:");
                $(".r4col2").append(nutritionResponse.foods[0].nf_protein + '%'+'<br>')
                $(".r5col1").append("saturated fat:");
                $(".r5col2").append(nutritionResponse.foods[0].nf_saturated_fat + '%'+'<br>')
                $(".r6col1").append("sodium:");
                $(".r6col2").append(nutritionResponse.foods[0].nf_sodium + '%'+'<br>')
                $(".r7col1").append("sugar:");
                $(".r7col2").append(nutritionResponse.foods[0].nf_sugars + '%'+'<br>')
                $(".r8col1").append("total carbohydrate:");
                $(".r8col2").append(nutritionResponse.foods[0].nf_total_carbohydrate + '%'+'<br>')
                $(".r9col1").append("total fat:");
                $(".r9col2").append(nutritionResponse.foods[0].nf_total_fat + '%'+'<br>')




            });
        });