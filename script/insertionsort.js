function Insertion() {
    c_delay=0;
      
      let j=0;
      for(;j<array_size;j++)
      {
          div_update(divs[j],div_sizes[j],"yellow");
          let key= div_sizes[j];
          let i=j-1;
          while(i>=0 && div_sizes[i]>key)
          {
              // console.log(i);
              div_update(divs[i],div_sizes[i],"red");
              div_update(divs[i+1],div_sizes[i+1],"red");
  
              div_sizes[i+1]=div_sizes[i];
  
              div_update(divs[i],div_sizes[i],"red");
              div_update(divs[i+1],div_sizes[i+1],"red");
      
              div_update(divs[i],div_sizes[i],"#6399f1");
              if(i==(j-1))
              {
                  div_update(divs[i+1],div_sizes[i+1],"yellow");
              }
              else
              {
                  div_update(divs[i+1],div_sizes[i+1],"#6399f1");
              }
              i--;
          }
          div_sizes[i+1]=key;
  
          for(let t=0;t<j;t++)
          {
              div_update(divs[t],div_sizes[t],"#b578e8");
          }
      }
      div_update(divs[j-1],div_sizes[j-1],"#b578e8");
    enable_buttons();
  }