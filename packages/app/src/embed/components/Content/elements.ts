import styled from 'styled-components';
import css from '@styled-system/css';

export const Container = styled.div(
  css({
    display: 'flex',
    position: 'relative',
    backgroundColor: 'editor.background',
    height: '100%',
  })
);

export const Tabs = styled.div(
  css({
    display: 'flex',
    height: 33,
    minHeight: 33,
    backgroundColor: 'tab.inactiveBackground',
    /* shadow instead of border to align with the border of the child tab */
    boxShadow: theme => 'inset 0px -1px 0 ' + theme['sideBar.border'],
    overflowX: 'auto',
    fontSize: 3,

    '-ms-overflow-style': 'none', // IE 10+
    overflow: '-moz-scrollbars-none', // Firefox
    '&::-webkit-scrollbar': {
      height: '2px', // Safari and Chrome
    },

    /* override children, bad but vscode doesnt support
       tab.hoverForeground so we explicitly set it :shrug:
    */
    '> div:hover > div': {
      color: 'tab.hoverForeground',
    },
  })
);

export const MenuInTabs = styled.span(
  css({
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 2,
  })
);
