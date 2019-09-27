*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${SERVER}         localhost:3000
${BROWSER}        Firefox
${URL}            http://${SERVER}
${DELAY}          0
${NAME}           FooBar
${ADDRESS}        1, Street

*** Test Cases ***
Open Browser To Login Page
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}

Input Name
    Input Text    name    ${NAME}

Input Address
    Input Text    address    ${ADDRESS}

Submit Credentials
    Submit Form   None

Check Answer
    Wait Until Element Contains  id:answer  ${NAME}
