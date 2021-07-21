import React from 'react';
import facebook from '../../images/facebook.svg';
import fries from '../../images/fries.svg';
import hamburger from '../../images/hamburger.svg';
import instagram from '../../images/instagram.svg';
import lightHamburger from '../../images/light-hamburger.svg';
import nav from '../../images/nav.svg';
import soda from '../../images/soda.svg';
import './Icon.scss';

function Icon(props) {
  const cssClass = 'Icon';
  const icons = {
    'instagram': instagram,
    'facebook': facebook,
    'hamburger': hamburger,
    'lightHamburger': lightHamburger,
    'soda': soda,
    'fries': fries,
    'nav': nav
  }

  return (
    <img className={`${cssClass} ${cssClass}--${props.type}`} src={icons[props.icon]} alt={props.icon} />
  );
}

export default Icon;