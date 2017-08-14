    function getWeeksOfYear(year){
        var weeks=Array();
        for(var i =0;;i++)
        {
            if(parseInt(new Date(geStartedDateOfWeek(year,i)).getFullYear())==year-1)
            {
                continue;
            }
            else if(parseInt(new Date(geStartedDateOfWeek(year,i)).getFullYear())==year+1)
            {
                break;
            }
            var week={
                text:i+". Week",
                StartedDate:moment(geStartedDateOfWeek(year,i)).format('DD/MM/YYYY'),
                FinishedDate:moment(geStartedDateOfWeek(year,i)).add(6,'day').format('DD/MM/YYYY')
            }
            weeks.push(week);
        }
        return weeks;
    }

    function geStartedDateOfWeek(year, week) {
        var myDate = new Date(year, 0, 1);
        var datePosition = myDate.getDay();
        var diff = --week * 7;

        if (!datePosition || datePosition > 4) {
            diff += 7;
        }
        myDate.setDate(myDate.getDate() - myDate.getDay() + ++diff);
        return myDate;
    }
