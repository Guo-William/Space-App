import { FormControl, FormGroup, FormLabel, makeStyles, Link, Button } from '@material-ui/core';
import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import IncomeCheckBox from './components/IncomeCheckBox';
import Carousel from './components/Carousel';
import './App.css';

function App() {
  const [race, setRace] = useState({});
  const [age, setAge] = useState();
  const [incomeLevel, setIncomeLevel] = useState({});
  const handleChange = (value, specificInfo) => {
    setRace({ value, specificInfo });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <div class='top-image'>
        <div>
          <div class='image-shift'>
            <div class='image-title'>
              <div class='image-text-small white-back'>DEBUNKING THE</div>
              <div class='image-text white-back'>MODEL MINORITY MYTH</div>
            </div>
            <div class='white-back image-blurb'>At first glance, Asian-American Pacific Islanders seem to have it real good. They are at the top of their class, financially successful, and dominate top positions in the workplace...or do they?<br /><br />The Model Minority Myth is notorious for reducing the AAPI community to a monolith under the guise of praise. The result puts thousands of underrepresented ethnic groups at a serious disadvantage in their education, careers, and financial literacy — areas where AAPI supposedly excel.</div>
            <div class='white-back image-authors'>A hackathon project by JAWAS</div>
          </div>
        </div>
      </div>
      <main>
        <nav class="section-nav">
          <span class='table-of-contents'>Table of Contents</span>
          <ol>
            <li class='menu-line'><a class='table-of-contents-header' href="#section-1">1. What is the model minority myth?</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#overview">Overview</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-items' href="#demographics">Demographics</a></li>
            <li class='menu-line'><a class='table-of-contents-header' href="#section-2">2. Model minority myth pillars</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#intel">Intelligence</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#wealth">Wealth</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#higher-ed">Higher education</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-items' href="#stem-careers">STEM careers</a></li>
            <li class='menu-line'><a class='table-of-contents-header' href="#section-3">3. So where does MMM come from?</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#us-politics">U.S. politics</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#wwii">World War II</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-items' href="#immigration">Immigration and Nationality Act</a></li>
            <li class='menu-line'><a class='table-of-contents-header' href="#section-4">4. Who does it harm and how?</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-items' href="#black-america">Black Americans</a></li>
            <li class='menu-line'><a class='table-of-contents-header' href="#section-5">5. Why is it hard to dispel?</a></li>
            <li class='menu-line'><a class='table-of-contents-items' href="#overestimating">Overestimating racial equality</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-items' href="#whole-story">Data doesn’t tell the whole story</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-header' href="#section-6">6. Data disaggregation is key</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-header' href="#section-7">7. What’s your MMM story?</a></li>
            <li class='menu-line bot-pad'><a class='table-of-contents-header' href="#section-8">8. Resources</a></li>
          </ol>
        </nav>
        <div>
          <section id="section-1">
            <div class='section-container'>
              <div class='body-section-brown'>Section One</div>
              <div class='body-section-black'>What is the model minority myth?</div>
            </div>
          </section>
          <section id="overview">
            <div class='section-container-nopad'>
              <div class='left-pad body-text'>Let’s get our definition of the model minority myth from the people who historically place it upon Asian-American Pacific Islanders (AAPI): the uninformed majority who use it to draw conclusions at their convenience.</div>
              <div class='top-margin-2 highlight-card'>
                <div class='quote-body'>
                  “Today, Asian-Americans are among the most prosperous, well-educated, and successful ethnic groups in America. What gives? It couldn’t possibly be that they maintained solid two-parent family structures, had social networks that looked after one another,&nbsp;
                  <b>placed enormous emphasis on education and hard work, and thereby turned false, negative stereotypes into true, positive ones,&nbsp;</b>
                  could it? It couldn’t be that all whites are not racists or that the American dream still lives?”
                </div>
                <div class='quote-source'>
                  – &nbsp;
                  <a class='brown-link' target="_blank" href='https://nymag.com/intelligencer/2017/04/why-do-democrats-feel-sorry-for-hillary-clinton.html'>
                    A real example from a real white man in a real publication. In 2017.
                  </a>
                </div>
              </div>
              <div class='after-highlight-quote'>
                In addition to pervasive Asian-American Pacific Islander (AAPI) stereotypes, misleading data has created American people who are uninformed and not curious about whether this myth holds up and how it affects the AAPI population.
              </div>
              <div class='body-text-smaller top-marg-1'>
                But it’s not just the majority who have contributed to and believe this myth.&nbsp;
                <a class='brown-link' target="_blank" href='https://rethinkingschools.org/articles/tiger-moms-and-the-model-minority-myth/'>AAPI are complicit in allowing this stereotype to exist. </a>
                After all, what could be so bad about being thought of as smart and high-achieving?
              </div>
              <div class='debunk'>Before we dive into debunking MMM, let’s start with an intro to AAPI demographics:</div>
              <ul class='debunk-list'>
                <li>AAPI are 5.4% of the American population, or 17.7 million people</li>
                <li>Over 20 ethnicities and over 33 languages are included under “Asian” in the American Community Survey</li>
                <li>Chinese and Asian Indians make up the majority at 25.6% and 20.6% respectively</li>
              </ul>
            </div>
          </section>
          <section id='demographics'>
            <div class='section-container-botpad'>
              <iframe src='https://flo.uri.sh/story/578754/embed' frameborder='0' scrolling='no' style={{ 'width': '100%', 'height': '600px' }} aria-label=''></iframe>
            </div>
          </section>
          <section id="section-2">
            <div class='section-container'>
              <div class='body-section-brown'>Section two</div>
              <div class='body-section-black'>What are the pillars of the MMM and why are they false?</div>
            </div>
          </section>
          <section id='intel'>
            <div class='section-white'>
              <div class='section-container'>
                <div class='pillar-title'><span class='pillar-title-highlight'>Pillar #1: AAPI are inherently smart</span></div>
                <div class='information-container before-graphic'>
                  <p>The notion that AAPI are inherently “good at math” is deeply rooted in American culture. From the Americane ducation system to Andrew Yang’s presidential campaign slogan to Oscar jabs, AAPI have almost always been synonymous with ‘smart’.</p>
                  <iframe title="Percent High School Completion by Race" aria-label="Bar Chart" id="datawrapper-chart-WCXFQ" src="https://datawrapper.dwcdn.net/WCXFQ/7/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin-bottom': '2em' }} width="600" height="239"></iframe>
                  <p>This sort of generalization perpetuates a false narrative by blanketing all AAPI undercircumstances that would allow them to be an academically successful community.&nbsp;
                    <a class='brown-link' target="_blank" href='https://www.researchgate.net/publication/333878732_Impacts_of_the_Model_Minority_Myth_on_Asian_American_Individuals_and_Families_Social_Justice_and_Critical_Race_Feminist_Perspectives'>In truth, the MMM has negatively impacted students’ academic performance, mental health, and the mobility of certain ethnic groups.</a></p>
                  <p>While the AAPI community may seem to be studious at first glance, a breakdown of individual ethnic groups shows that not all AAPI finish high school.</p>
                </div>
                <iframe title="% Ethnicity Completion Highschool" aria-label="Bar Chart" id="datawrapper-chart-sXu9z" src="https://datawrapper.dwcdn.net/sXu9z/1/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin-bottom': '4em' }} width="600" height="742"></iframe>
              </div>
            </div>
            <div class='naked-quote'>“This sort of generalization perpetuates a false narrative by blanketing all AAPI under circumstances that would allow them to be an academically successful community.”</div>
          </section>
          <section id='wealth'>
            <div class='section-white'>
              <div class='section-container'>
                <div class='pillar-title'><span class='pillar-title-highlight'>Pillar #2: AAPI are wealthy</span></div>
                <div class='information-container before-graphic'>
                  <p>AAPI overall have the highest average household incomes compared to those of other racial groups, including Whites.</p>
                  <iframe title="Median Wage by Race " aria-label="Bar Chart" id="datawrapper-chart-mljqV" src="https://datawrapper.dwcdn.net/mljqV/1/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin-bottom': '2em' }} width="600" height="239"></iframe>
                  <p>When comparing the average household incomes across more general racial groups, it is easy to categorize the AAPI community as financially prosperous. However, by breaking up the AAPI community into more specific ethnicities is it obvious that the data is skewed by the earnings of a few groups.</p>
                  <p><a class='brown-link' target="_blank" href='https://www.washingtonpost.com/news/magazine/wp/2019/03/18/feature/does-affirmative-action-help-or-hurt-asians-who-dont-fit-the-model-minority-stereotype/'>This is in large part due to the selective migration patterns of Asian Indians and Chinese to the United States, versus the Southeast Asian populations, most of whom had arrived as refugees.</a></p>
                </div>
                <iframe title="Median Wage per Ethnicity" aria-label="Bar Chart" id="datawrapper-chart-WhvJZ" src="https://datawrapper.dwcdn.net/WhvJZ/2/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin-bottom': '4em' }} width="600" height="742"></iframe>
              </div>
            </div>
          </section>
          <section id='higher-ed'>
            <div class='section-white'>
              <div class='section-container'>
                <div class='pillar-title'><span class='pillar-title-highlight'>Pillar #3: AAPI are more successful in obtaining higher education </span></div>
                <div class='information-container'>
                  <p>By extension of their assumed greater intelligence, AAPI are perceived to be more successful in obtaining higher education than their White or POC counterparts. In fact, many AAPI are expected— by their peers, teachers, and family members— to easily gain admission into universities for their efforts.</p>
                  <iframe title="% Ethnicity BS Degree + (Broad)" aria-label="Bar Chart" id="datawrapper-chart-UUVkr" src="https://datawrapper.dwcdn.net/UUVkr/1/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin': '2em 0' }} width="600" height="214"></iframe>
                  <p>Unfortunately, attending university isn’t as promising to AAPI students as one might believe.</p>
                  <p>
                    <a class='brown-link' target="_blank" href='https://www.nytimes.com/2019/08/28/magazine/affirmative-action-asian-american-harvard.html'>Firstly, not all members of the AAPI community do well in school. As mentioned previously, different ethnic groups must overcome specific disadvantages in order to level with their more privileged peers, such as language barriers, financial circumstances, and responsibilities outside of school.</a>
                    &nbsp;Furthermore, not every ethnic group within the AAPI community is given the same amount of attention by educators. The MMM is so pervasive in our education system that teachers will often assume that their AAPI students don’t need help.</p>
                  <p>Secondly, not all members of the AAPI complete their Bachelor’s education— again, due to a number of factors. As can be seen below, there is almost a 60% disparity between the ethnicity with the most university graduations (Taiwanese) and the ethnicity with the least (Bhutanese). This gap widens as the degree becomes more advanced. </p>
                </div>
                <iframe title="% Ethnicity BS Degree +" aria-label="Bar Chart" id="datawrapper-chart-LUKms" src="https://datawrapper.dwcdn.net/LUKms/1/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin': '4em 0' }} width="600" height="742"></iframe>
                <iframe title="% Ethnicity BS Degree + (Asian Ethnicities)" aria-label="Bar Chart" id="datawrapper-chart-gOO4q" src="https://datawrapper.dwcdn.net/gOO4q/1/" scrolling="no" frameborder="0" style={{ "border": "none" }} width="600" height="622"></iframe>
              </div>
            </div>
            <div class='naked-quote'>“The MMM is so pervasive in our education system that teachers will often assume that their AAPI students don’t need help.”</div>
          </section>
          <section id='stem-careers'>
            <div class='section-white'>
              <div class='section-container bot-pad-4 bot-marg-2'>
                <div class='pillar-title'><span class='pillar-title-highlight'>Pillar #4: AAPI are more present in STEM and higher earning careers</span></div>
                <div class='information-container'>
                  <p>The belief that AAPI are inherently suited for and successful in STEM careers is a common theme in media and political discourse.&nbsp;
                    <a class='brown-link' target="_blank" href='https://www.tandfonline.com/doi/full/10.1080/13613324.2017.1377170'>However, this isn’t true for AAPI people across the board for every STEM related field.</a>&nbsp;
                      For instance, AAPI persons have the highest numbers within the healthcare field as lab technicians (11.8%) and practitioner support technicians (6.9%). However, they are underrepresented in all other occupations within the healthcare field. For example, making up only 3.4% of psychologists and 2.2% of speech–language pathologists.</p>
                  <iframe title="% Ethnicity in STEM Field" aria-label="Bar Chart" id="datawrapper-chart-nEwIM" src="https://datawrapper.dwcdn.net/nEwIM/1/" scrolling="no" frameborder="0" style={{ "border": "none", 'margin': '2em 0' }} width="600" height="742"></iframe>
                  <p class='container-title'>Success doesn’t mean equality</p>
                  <p>
                    While some Asians seem to be doing well for themselves and successful in terms of socioeconomic status, they&nbsp;
                    <a class='brown-link' target="_blank" href='https://www.bbc.com/worklife/article/20180801-what-the-average-american-ceo-looks-like'>aren’t represented the same way in leadership</a>
                    . While Asians make up 8.9% of employees in the healthcare industry, they only make up&nbsp;
                    <a class='brown-link' target="_blank" href='https://www2.deloitte.com/us/en/pages/center-for-board-effectiveness/articles/missing-pieces-report-industry-view.html'>4% of Fortune 500 board seats in the healthcare industry.</a>
                  </p>
                  <p>White men dominate not only the CEO positions, but also the executive board seats, taking up over 60% of every board across each industry.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="section-3">
            <div class='section-container'>
              <div class='body-section-brown'>Section Three</div>
              <div class='body-section-black'>So where does MMM come from?</div>
            </div>
          </section>
          <section id="us-politics">
            <div class='section-container-nopad'>
              <div class='left-pad body-text'>AAPI stereotypes have always been tied to the convenience of US politics.</div>
              <div class='body-text-smaller'>
                When White jobs were under pressure, AAPI made an easy target.
                Chinese immigrants began coming to the US in large numbers during the California gold rush. After it and the economy looked unstable, White American workers became anxious about their jobs.
                White American Congress passed the&nbsp;
                <a class='brown-link' target="_blank" href='https://www2.deloitte.com/us/en/pages/center-for-board-effectiveness/articles/missing-pieces-report-industry-view.html'>Chinese Exclusion Act</a>
                &nbsp;in 1882. In fact, white voices concerned over their foreign competitors were so convincing that by&nbsp;
                <a class='brown-link' target="_blank" href='https://en.wikipedia.org/wiki/Immigration_Act_of_1924'>1924, all AAPI immigration had been banned</a>.
              </div>
              <img class='image-box-shadow' src="https://www.foundsf.org/images/e/e4/WASP_The-First-Blow-at-the-Chinese-Question.jpg" />
            </div>
          </section>
          <section id="wwii">
            <div class='section-container-nopad'>
              <div class='body-text-smaller body-text-top-margin'>During World War II, when the Japanese were considered an enemy, internment camps were implemented along with Anti-Asian propaganda. After the war, immigration exclusion policies were overturned in 1952 when the US became interested in rebuilding Japan as a capitalist democratic country.</div>
            </div>
          </section>
          <section id="immigration">
            <div class='section-container-nopad'>
              <div class='body-text-smaller'>Despite the seemingly egalitarian reform, its new quota system capped immigration. The Immigration and Nationality Act of 1952 allocated&nbsp;
              <a class='brown-link' target="_blank" href='https://immigrationhistory.org/item/immigration-and-nationality-act-the-mccarran-walter-act/'>85 percent of its quotas to western and northern Europeans</a>.</div>
              <div class='body-text-smaller'>With such a small quota split among Asian countries, selection for Asian immigrants were biased towards those of higher economic status and higher education.</div>
              <div class='naked-quote-outside'>“When the US government was accused of racism, Asians made for an ideal example of the model minority.”</div>
            </div>
          </section>
          <section id="section-4">
            <div class='section-container'>
              <div class='body-section-brown'>WHO DOES THE MMM HARM AND HOW?</div>
              <div class='body-section-black'>Not only is the MMM false, it’s also divisive and harmful.</div>
            </div>
          </section>
          <section id="black-america">
            <div class='section-container-nopad'>
              <div class='left-pad body-text'>The Model Minority Myth harms black people.&nbsp;
              <a class='brown-link' target="_blank" href='http://convention.myacpa.org/houston2018/wp-content/uploads/2017/11/Poon-et-al-2015-REVIEW-OF-EDUCATIONAL-RESEARCH.pdf'>AAPI were frequently pointed to as a narrative to dismiss the demands for Black racial justice.</a></div>
              <div class='body-text-smaller'>When Black activism began to take off in the 50s and 60s, so did the model minority myth. “If this one minority group was able to immigrate, overcome prejudice, and become “successful” in America, all without protesting, why can’t Black people?” Elevating AAPI as hardworkers denigrates black people.</div>
              <div class='debunk'>The MMM was used to:</div>
              <ul class='debunk-list'>
                <li>Shift the blame from systemic racism onto the Black population</li>
                <li>Create a wedge between AAPI and Blacks</li>
                <li>Erase the entirely different contexts in which the AAPI and Black populations ended up in the US</li>
              </ul>
            </div>
          </section>
          <section id="section-5">
            <div class='section-container'>
              <div class='body-section-brown'>section five</div>
              <div class='body-section-black'>Why is it hard to dispel?</div>
            </div>
          </section>
          <section id="overestimating">
            <div class='section-container-nopad'>
              <div class='left-pad body-text'><a class='brown-link' target="_blank" href='https://journals.sagepub.com/doi/full/10.1177/1745691619863049#bibr112-1745691619863049'>Americans overestimate racial equality.</a></div>
              <div class='body-text-smaller'>
                We generally believe that the United States has made progress toward achieving (or already have achieved) racial equality. But those beliefs are generally optimistic and false in reality. It’s easy to point to milestones made in the court, such as emancipation, Brown v Board of Education, and the election of the first black president Barack Obama. It’s much harder to listen to the stories of those who suffered through lynchings, Jim Crow, and redlining, despite all of these laws that forwarded racial equality in the same time period.
              </div>
            </div>
          </section>
          <section id="whole-story">
            <div class='section-container pad-top-2'>
              <div class='body-text'>The data may look good for AAPI, but it doesn’t tell the full story.</div>
              <div class='body-text-smaller'>We saw above how data can support a certain conclusion. But when we broke it down by ethnicity, racial economic disparity became a much more obvious problem. Many surveys do not ask any further questions when the “Asian” checkbox is marked, and it hides the struggles of smaller ethnic groups within the monolith of “Asian”.</div>
              <div class='body-text-smaller'>
                Even with a more detailed way of identifying ethnicity, many studies may not be able to include the&nbsp;
                <a class='brown-link' target="_blank" href='http://aapidata.com/blog/asian-undoc-1in7/'>1.7 million undocumented AAPI who make up 1 out of every 7 immigrants.</a>
              </div>
            </div>
          </section>
          <section id="section-6">
            <div class='section-container'>
              <div class='body-section-brown'>section six</div>
              <div class='body-section-black'>Data disaggregation is necessary to understand and dismantle racism</div>
              <div class='body-text top-marg-1'>Throughout the different graphs we explored today, we saw how a larger group obscured the education gap, wealth gap, and wage gap that smaller ethnic groups experience. </div>
              <div class='body-text-smaller'>Census data is meant to enlighten and inform people in power to make evidence-based decisions. But when the data seemingly says everything is in the clear, it obscures the struggles of those who really need resources.</div>
              <div class='body-text-smaller'>Disaggregating ethnicity data provides policymakers with a more informed perspective to understand the challenges minority groups face, and in turn make decisions that are equitable and inclusive at the city, county, and nation-wide level.</div>
              <div class='naked-quote-outside'>“But when the data seemingly says everything is in the clear, it obscures the struggles of those who really need resources.”</div>
            </div>
          </section>
          <section id="section-7">
            <div class='section-container'>
              <div class='body-section-brown'>section seven</div>
              <div class='body-section-black'>What’s your MMM story?</div>
              <div class='body-text top-marg-1 bot-pad-2'>While these data visualisations show how this myth doesn’t apply to many different cultures, our personal day-to-day experiences living up to this standard can be difficult to quantify. As an AAPI person, what has your experience with the model minority myth been?</div>
              <Carousel/>
              <div class='button-div'><Button component={Link} href='https://forms.gle/mgVuYDkcYxCFFE1M7' class='story-button'>
                <span>Submit your own story</span>
              </Button></div>
            </div>
          </section>
          <section id="section-8">
            <div class='section-container'>
              <div class='body-section-brown'>section Eight</div>
              <div class='body-section-black'>Further Reading</div>
              <div class='body-text top-marg-1'>Get more familiar with the implications of the Model Minority Myth and how it has affected your friends, family, and even yourself. </div>
              <div class='body-text top-marg-1'>
                <p><span class='source-top-text'>NPR</span><br /><a class='brown-link' target="_blank" href='https://www.npr.org/sections/codeswitch/2017/04/19/524571669/model-minority-myth-again-used-as-a-racial-wedge-between-asians-and-blacks'>'Model Minority' Myth Again Used As A Racial Wedge Between Asians And Blacks</a></p>
                <p><span class='source-top-text'>Madeline Y. Hsu</span><br /><a class='brown-link' target="_blank" href='https://www.barnesandnoble.com/w/the-good-immigrants-madeline-y-hsu/1126361923?ean=9780691176215&pcta=n'>The Good Immigrants: How the Yellow Peril Became the Model Minority</a></p>
                <p><span class='source-top-text'>Asian Americans in the Law, Harvard</span><br /><a class='brown-link' target="_blank" href='https://thepractice.law.harvard.edu/article/the-model-minority-myth/'>The Model Minority Myth</a></p>
              </div>
            </div>
          </section>
        </div>
      </main >
    </React.Fragment >
  );
}

export default App;