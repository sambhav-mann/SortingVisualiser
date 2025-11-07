function Bubble()
{
    c_delay=0;
    
    let i=0;
    for(;i<array_size-1;i++)
    {
        let j=0;
        for(;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");

                let temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
            }
            div_update(divs[j],div_sizes[j], "#6399f1");
        }
        div_update(divs[j],div_sizes[j], "#b578e8");
    }
    div_update(divs[0],div_sizes[0], "#b578e8");

    enable_buttons();
}
