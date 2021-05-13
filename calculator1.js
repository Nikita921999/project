





const questionsForm = document.querySelector('#questionsForm');
const resultsDiv = document.querySelector('#newDiv');
const heading = document.querySelector('#heading');


questionsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = questionsForm.elements.fullname;
    const ageInput = questionsForm.elements.age;

    const newHeading = document.createElement('h1');
    newHeading.innerText = `Hey ${nameInput.value.toUpperCase()} , your predicted life expectancy is ${parseInt(ageInput.value) + 30} years .`;
    newHeading.style.textAlign = "center";
    newHeading.style.color = "#0077b6";
    heading.append(newHeading);

    const bTag = document.createElement('b');
    const title = `Here is some feedback/suggestions we have gathered 
    from your input to the form . Your current age is : ${ageInput.value} and after using the 
    Life Predictor tool your predicted life expectancy is ${parseInt(ageInput.value) + 30}.We have put together
    some tips which you can follow in your day-to-day life to increase your life-span.`;
    bTag.style.color = "#023e8a";
    bTag.append(title);
    newDiv.append(bTag);

    const smokingHabits = document.createElement('li');
    if (questionsForm.elements.smoke.value === "0") {
        smokingHabits.textContent = `Studies have shown that individuals who quit smoking at about 30 gain almost 
        10 years of life expectancy ; likewise those who quit smoking at 50 gain 6 years of life expectancy .You can 
        limit the intake to upto 2 times a week to avoid other diseases including heart attack and respiratory diseases.`;
        newDiv.append(smokingHabits);

    }

    const drinkingHabits = document.createElement('li');
    if (questionsForm.elements.alcohol.value === "0") {
        drinkingHabits.textContent = `Alcohol plays a role in atleast half of all serious trauma injuries , diseases and deaths from burns , 
        drownings and homicides .Even cutting back your drinking by a third can lower the number of injuries and sick days .`;
        newDiv.append(drinkingHabits);

    }
    const diabetes = document.createElement('li');
    if (questionsForm.elements.diabetes.value === "0") {
        diabetes.textContent = `Keeping blood sugar levels close to normal is challenging but with regular exercise
        , a proper meal and taking your insulin/pills without fail can do the job . Check your blood sugar levels and 
        visit your doctor regularly .  `;
        newDiv.append(diabetes);
    }

    const heartDisease = document.createElement('li');
    if (questionsForm.elements.heart.value === "0") {
        heartDisease.textContent = `Heart disease is a leading cause of death but with few lifestyle changes like 
        blood pressure and diabetes in control , cholesterol and triglyceride levels in control , regular exercise , proper diet , 
        enough sleep and managing stress can help you avoid it . Limiting alcohol and not smoking can also help .`;
        newDiv.append(heartDisease);
    }

    const bloodPressure = document.createElement('li');
    if (questionsForm.elements.bp.value === "0") {
        bloodPressure.textContent = `Some lifestyle changes like exercising regularly , eating a healthy diet ,
        reducing sodium in your diet , limiting the amount of alcohol , quit smoking , cutting back on caffeine , reducing stress
        can help keep blood pressure in control . It is also advised to monitor your blood pressure at home and see your 
        doctor regularly .`;
        newDiv.append(bloodPressure);
    }

    const driving = document.createElement('li');
    if (questionsForm.elements.drive.value === "1") {
        driving.textContent = `Rash driving can be life threatening and can sometimes lead to accidents and 
        also death . Obeying all traffic rules , slowing down , keeping your vehicle in good running shape , 
        wearing helmet/seat belt while driving  , avoiding drinking and driving and other distractions can help 
        to avoid accidents .`;
        newDiv.append(driving);
    }

    const chronicDisease = document.createElement('li');
    if (questionsForm.elements.disease.value === "1.0" && questionsForm.elements.diabetes.value !== "0") {
        chronicDisease.textContent = `Keeping blood sugar levels close to normal is challenging but with regular exercise
        , a proper meal and taking your insulin/pills without fail can do the job . Check your blood sugar levels and 
        visit your doctor regularly .`;
        newDiv.append(chronicDisease);
    }
    else if (questionsForm.elements.disease.value === "1.1" && questionsForm.elements.heart.value !== "0") {
        chronicDisease.textContent = `Heart disease is a leading cause of death but with few lifestyle changes like 
        blood pressure and diabetes in control , cholesterol and triglyceride levels in control , regular exercise , proper diet , 
        enough sleep and managing stress can help you avoid it . Limiting alcohol and not smoking can also help . `;
        newDiv.append(chronicDisease);
    }
    else if (questionsForm.elements.disease.value === "1.3") {
        chronicDisease.textContent = `Cancer can be prevented by avoiding tobacco , eating a healthy diet and
        exercising regularly . Avoiding the midday sun and tanning beds can reduce the risk of skin cancer .`;
        newDiv.append(chronicDisease);
    }
    else if (questionsForm.elements.disease.value === "1.4" && questionsForm.elements.bp.value !== "0") {
        chronicDisease.textContent = `Some lifestyle changes like exercising regularly , eating a healthy diet ,
        reducing sodium in your diet , limiting the amount of alcohol , quit smoking , cutting back on caffeine , reducing stress
        can help keep blood pressure in control . It is also advised to monitor your blood pressure at home and see your 
        doctor regularly .`;
        newDiv.append(chronicDisease);
    }
    else if (questionsForm.elements.disease.value === "1.6") {
        chronicDisease.textContent = `Firstly it is necessary to identify asthma triggers and to stay away from any allergens and smoke .
        Getting vaccinated can also help . `;
        newDiv.append(chronicDisease);
    }

    const sleepingHabits = document.createElement('li');
    if (questionsForm.elements.sleep.value === "0" || questionsForm.elements.sleep.value === "2") {
        sleepingHabits.textContent = `Sleep plays an important role in your physical health . 
        Sleep is involved in healing and repair of your body . Ongoing sleep deficiency is linked to increased heart disease , 
        kidney disese , high blood pressure , diabetes and stroke. A minimum of 7-8 hours of sleep is recommended .`;
        newDiv.append(sleepingHabits);
    }

    const foodHabits = document.createElement('li');
    if (questionsForm.elements.diet) {
        foodHabits.textContent = `Eating a balanced diet can help your brain and body function properly . Eating well 
        helps to reduce the risk of physical health problems . A balanced diet includes fresh fruits , fresh vegetables , whole
        grains , legumes , nuts and lean proteins . The average person needs about 2000 calories every day to maintain a healthy weight .`;
        newDiv.append(foodHabits);
    }

    const physicalActivity = document.createElement('li');
    if (questionsForm.elements.activity.value === "2" || questionsForm.elements.activity.value === "3" || questionsForm.elements.activity.value === "4") {
        physicalActivity.textContent = `As little as 15 minutes of physical activity a day can increase your
        life span by as much as 3 years . The benefits increase with each minute of activity you add`;
        newDiv.append(physicalActivity);
    }

    const livingEnvironment = document.createElement('li');
    if (questionsForm.elements.environment.value === "2" || questionsForm.elements.environment.value === "3") {
        livingEnvironment.textContent = `Both short and long term exposure to pollutants specially air pollutants
         have been associated with health impacts . Avoiding polluted areas or wearing a mask can help to an extent .`;
        newDiv.append(livingEnvironment);
    }
    const personality = document.createElement('li');
    if (questionsForm.elements.personality) {
        personality.textContent = `Research shows that personality trait related experiences have a biological impact 
        that ultimately affects health , stress response and immune system .`;
        newDiv.append(personality);
    }
    const stressLevels = document.createElement('li');
    if (questionsForm.elements.stress.value === "2" || questionsForm.elements.stress.value === "3") {
        stressLevels.textContent = `Ongoing, chronic stress, can cause or exacerbate many serious health problems, 
        including: Mental health problems, such as depression, anxiety, and personality disorders. 
        Cardiovascular disease, including heart disease, high blood pressure, abnormal heart rhythms, heart attacks, and stroke.
        Meditating , exercising , laughing , spending time with family and friends are few of the best ways to relieve stress .`;
        newDiv.append(stressLevels);
    }
    questionsForm.reset();

});

