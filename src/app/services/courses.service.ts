import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = [
    {
      id: 101,
      name: 'Technology',
     
      image: 'assets/courses/modern-education-Skillstork-1568x882.jpg',
      description:
        ' Technology is the study of scientific knowledge in order to create tools and processes that may be used to change the world by increasing efficiency in nearly every aspect of our lives. Technology has made our lives easier, and all human beings have become entirely dependent on technology.',
    },
    {
      id: 102,
      name: 'Photography',
      
      image: '/assets/courses/Photography-for-Beginners.webp',
      description:
        'The word Photography literally means drawing with light, which derives from the Greek photo, meaning light and graph, meaning to draw. Photography is the process of recording an image – a photograph – on lightsensitive film or, in the case of digital photography, via a digital electronic or magnetic memory',
    },
    
   {       id: 104,
      name: 'Healthy foods',
       
       image: 'assets/images/vegetables.webp',
              description:
             ' A healthy diet typically includes nutrient-dense foods from all of the major food groups, including lean proteins, whole grains, healthy fats, and fruits and vegetables of many colors. Healthy eating habits also include replacing foods that contain trans fats, added salt, and sugar with more nutritious options.',
     },
    
  ];
  }
