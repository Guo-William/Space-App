import React, { useState } from 'react';

function Carousel() {
  const [slide, setSlide] = useState(0);
  return <div class="carousel" aria-label="Gallery">
    <a onClick={() => setSlide(slide - 1)} class="carousel__prev">Go to last slide</a>
    <div><div class="carousel__snapper">{createStory(STORIES[slide])}</div></div>
    <a onClick={() => slide === STORIES.length - 1 ? setSlide(0) : setSlide(slide + 1)} class="carousel__next">Go to next slide</a>
  </div>
}


function createStory({ bodies, source }) {
  return <React.Fragment>
    <div class='story'>
      {bodies.map(body => {
        return <div class='story-text'>{body}</div>
      })}
    </div>
    <div class='story-source'>{source}</div>
  </React.Fragment>
}

const STORIES = [
  {
    bodies: [
      "The model minority myth had a negative impact on how I viewed my fellow colleagues, friends, and students as I grew up. Being part of the race called the model minority, I had a sense of superiority even though it doesn't make sense. Due to the myth, it also felt that causasian was the race to try and attain to reach and I was close to it, but can never reach it."
    ],
    source: '– Luther Y, Chinese'
  },
  {
    bodies: ['Seems legit in my experiences. I have definitely had times where I would say something "dumb" and people would say that had to have been my "white side" talking, not the asian part of me. It\'s honestly toxic for young people, asian and non-asian, and causes stereotyping that can be hurtful for a long time in life.'],
    source: '– Kristina, White/Asian'
  }, {
    bodies: ["When I was a kid and I did well on my math exams, my friends would always say it was because I was Asian that I am able to get such high grades."],
    source: '– Matthew, Chinese'
  },
  {
    bodies: ["My peers and some family members were shocked about my decision to pursue a career in human services.  I received comments about how \"I'm not living up to my potential\" and that I should pursue a STEM career instead.  I also felt immense pressure to live up to the expectations that others have/had of me.  This led me to experience bouts of anxiety and feelings of inadequacy.  Fortunately, I formed relationships with Asian American nonprofit leaders, which helped mitigate these sentiments."],
    source: '– Sandy Saenbounmy, Vietnamese/Thai'
  },
  {
    bodies: [
      "As a member of the model minority, I am often juggling expectations of myself which come from myself, my immediate community, and my family all at once. As a Chinese American woman in her early 20’s, I am still discovering a lot about myself, including my values, self-care needs, and social support needs—a highly nuanced and personalized journey, especially as a third culture kid. However, whether in the form of unsolicited advice, micro aggressions, racial jokes, media jokes and even the etymology of labels such as Asian American and ABC, this journey to self-discovery is quite confusing and anxiety-ridden. Often, any step I take in any one direction feels like a transgression, to the point that take up space at all becomes a transgression. This puts me directly at odds with the elusive model minority mold I’ve so wished to fit throughout my life.",
      "It’s common in Chinese culture for elders to lavishly praise kids for their obedient, quiet, and hard-working nature—in fact, my aunts and uncles often respond to positive news about a family member with the declaration that he/she is “the great role model that we all wish to study.” Though I often joke about these situations, their messages have undoubtedly shaped me. I was all these things as a kid, and was well on my way to success in the eyes of my Chinese relatives and family friends who surrounded me throughout my early formative years.",
      "Come college and the “real world,” the criteria has been flipped. I’m expected to “speak up more” and carve my own path as an adult. Some days, I feel ill-equipt, dissappointed, and even ashamed both of who I am/have been and who I’m trying to be. The single hardest realization is that often, the voice of that critical parent, judgmental coworker, approving aunt, and random person on the street is not real at all, or perhaps was once real but now no longer—however, it leaves on in your subconscious and conscious thoughts as the model minority myth. Whether I am actively chasing or rejecting that model image, it continues to be a source of much frustration."
    ],
    source: "Maggie Zhang, Chinese-American"
  }
]

export default Carousel;