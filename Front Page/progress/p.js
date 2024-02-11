Vue.component('arrow', {
    template: `<svg xmlns="http://www.w3.org/2000/svg" width="13.889" height="14.718" viewBox="0 0 13.889 14.718">
                   <g transform="translate(1 1.414)">
                     <path d="M7.5,18H19.389" transform="translate(-7.5 -12.055)" fill="none" stroke-linecap="round"
                           stroke-linejoin="round" stroke-width="2"/>
                     <path d="M18,7.5l5.945,5.945L18,19.389" transform="translate(-12.055 -7.5)" fill="none"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                   </g>
                 </svg>`
  });
  
  Vue.component('card-message', {
    template: `
        <div class="card card--light">
            <div class="card__inner">
              <h6>Message</h6>
              <h2>Lorem Ipsum Dolor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Ab accusamus accusantium asperiores beatae eaque eveniet explicabo 
              consectetur adipisicing elit.</p>
  
              <a href="#" class="card__link">
                Read More
                <arrow/> 
              </a>
            </div>
        </div>`
  });
  
  Vue.component('card-todo', {
    template: `
        <div class="card card--mid">
            <div class="card__inner">
              <h6>Todo</h6>
              <a :key="index" href="#" class="todo" v-for="index in 3">Lorem Ipsum
               <arrow/>
             </a>
  
              <a href="#" class="card__link">
                See All
                <arrow/> 
              </a>
            </div>
        </div>`
  });
  
  Vue.component('card-progress', {
    template: `
        <div class="card card--dark">
            <div class="card__inner">
              <h6>Progress</h6>
              <svg viewBox="0 0 36 36" class="pie-chart">
               <path class="pie-chart__1"
                     stroke-dasharray="100, 100"
                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
               <path class="pie-chart__2"
                     stroke-dasharray="70, 100"
                     d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
               />
             </svg>
  
             <div class="percentage">
               70 <span>%</span>
             </div>
              <a href="#" class="card__link">
                More Info
                <arrow/> 
              </a>
            </div>
        </div>`
  });
  
  
  let app = new Vue({
  
    el: '#app',
  
  })