# allegro_testcafe
UI tests automation with TestCafe

To install TestCafe on your machine:
npm install -g testcafe

To install TestCafe in your project and save as devDependency, go to the project folder and use:
npm install --save-dev testcafe

To run tests write in terminal (other browsers can be used instead of chrome, e.g. firefox or safari):
testcafe chrome tests/

To run tests ingnoring js errors:
testcafe chrome tests/ -e

To run tests parallel:
testcafe -c 2 chrome tests/
