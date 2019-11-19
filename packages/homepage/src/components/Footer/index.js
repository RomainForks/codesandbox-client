import React from 'react';
import { Link } from 'gatsby';
import { P } from '../Typography';
import Github from '../../assets/icons/github';
import Twitter from '../../assets/icons/twitter';
import Spectrum from '../../assets/icons/spectrum';
import { FooterWrapper, Nav, Social } from './elements';

const Footer = () => (
  <FooterWrapper>
    <Nav>
      <ul>
        <li>
          <P big>Product</P>
        </li>
        <li>
          <P small muted>
            <Link to="/ide">Online IDE</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/embeds">Embed</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/ci">CodeSandbox CI</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/team">Teams</Link>
          </P>
        </li>
        {/* <li>
          <P small muted>
            <a href="">What’s New</a>
          </P>
        </li> */}
      </ul>
      <ul>
        <li>
          <P big>Explore</P>
        </li>
        <li>
          <P small muted>
            <Link to="/explore">Community Picks</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/search">Search</Link>
          </P>
        </li>
      </ul>
      <ul>
        <li>
          <P big>Use Cases</P>
        </li>
        <li>
          <P small muted>
            <Link to="/prototyping">Prototyping</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/learning">Learning</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/hiring">Hiring</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/onboarding">Onboarding</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/collaboration">Collaboration</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/open-source">Open Source</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <Link to="/devrel">DevRel</Link>
          </P>
        </li>
      </ul>

      <ul>
        <li>
          <P big>About</P>
        </li>
        {
          // <li>
          //   <P small muted>
          //     <Link to="">Company</Link>
          //   </P>
          // </li>
        }
        <li>
          <P small muted>
            <Link to="/blog">Blog</Link>
          </P>
        </li>
      </ul>

      <ul>
        <li>
          <P big>Support</P>
        </li>
        <li>
          <P small muted>
            <Link to="/docs">Documentation</Link>
          </P>
        </li>
        <li>
          <P small muted>
            <a href="mailto:hello@codesandbox.io">Contact Support</a>
          </P>
        </li>
        <li>
          <P small muted>
            <a href="https://status.codesandbox.io">Status</a>
          </P>
        </li>
      </ul>
    </Nav>
    <Social>
      <li>
        <a
          title="Go to Github"
          href="https://github.com/codesandbox/codesandbox-client"
        >
          <Github />
        </a>
      </li>
      <li>
        <a title="Go to Twitter" href="https://twitter.com/codesandbox">
          <Twitter />
        </a>
      </li>
      <li>
        <a title="Go to Spectrum" href="https://spectrum.chat/codesandbox">
          <Spectrum />
        </a>
      </li>
    </Social>
    <P
      small
      muted
      css={`
        text-align: center;
      `}
    >
      Copyright © {new Date().getFullYear()} CodeSandbox
    </P>
  </FooterWrapper>
);

export default Footer;