    // Zadanie 0

const firstElementClassFirst = document.querySelector('.first');
const firstElementClassFirstFirstChild = firstElementClassFirst.querySelector(':first-child');
const firstElementClassFirstFirstChildThirdChild = firstElementClassFirstFirstChild.querySelector('p:nth-child(3)')

console.log('1.1', firstElementClassFirst);
console.log('1.2', firstElementClassFirstFirstChild);
console.log('1.3', firstElementClassFirstFirstChildThirdChild);

const idElementSecond = document.getElementById('second');
const idElementSecondParent = idElementSecond.parentNode;
const idElementSecondParentFourthChild = idElementSecondParent.querySelector('li:nth-child(4)');

console.log('2.1', idElementSecond);
console.log('2.2', idElementSecondParent);
console.log('2.3', idElementSecondParentFourthChild);

const attributeElementThird = document.querySelector('h1[data-ex="third"]');
const attributeElementThirdGrandfather = attributeElementThird.parentNode.parentNode;
const attributeElementThirdGrandfatherLastChild = attributeElementThirdGrandfather.querySelector('div:last-child');
const attributeElementThirdGrandfatherLastChildFirstChild = attributeElementThirdGrandfatherLastChild.querySelector(':first-child');

const liElements = attributeElementThirdGrandfatherLastChildFirstChild.querySelectorAll('li');
let middleLiElement;

for (let i = 0; i <= liElements.length; i++)
    middleLiElement = i;

middleLiElement = middleLiElement / 2;
middleLiElement = Math.ceil(middleLiElement);


const attributeElementThirdGrandfatherLastChildFirstChildMiddleChild = attributeElementThirdGrandfatherLastChildFirstChild.querySelector(`li:nth-child(${middleLiElement})`);

console.log('3.1', attributeElementThird);
console.log('3.2', attributeElementThirdGrandfather);
console.log('3.3', attributeElementThirdGrandfatherLastChild);
console.log('3.4', attributeElementThirdGrandfatherLastChildFirstChild);
console.log('3.5', attributeElementThirdGrandfatherLastChildFirstChildMiddleChild);


const divForthElement = document.querySelector('.forth');
const divForthElementParent = divForthElement.parentNode;
const divForthElementParentFirstChildArticle = divForthElementParent.querySelector('article');
const divForthElementParentFirstChildArticleSecondChildP = divForthElementParentFirstChildArticle.querySelector(':nth-child(4)');

console.log('4.1', divForthElement);
console.log('4.2', divForthElementParent);
console.log('4.3', divForthElementParentFirstChildArticle);
console.log('4.4', divForthElementParentFirstChildArticleSecondChildP);





