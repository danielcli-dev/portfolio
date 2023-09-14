import React from "react";
import "./About.css";
import ArticleIcon from "@mui/icons-material/Article";

function About() {
  return (
    <div className="about__container" id="about">
      <div className="about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
        ornare nisi, vitae fermentum mauris luctus vel. In a consectetur ipsum.
        Integer risus massa, viverra ut nisi accumsan, iaculis ullamcorper
        metus. Cras sit amet eros mollis, tincidunt dolor in, venenatis augue.
        Suspendisse consectetur, ante non ultricies convallis, orci metus
        tincidunt felis, non fringilla dui nisl vitae ante. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
        tempus suscipit eros, porta mattis odio. Ut sed porta augue. Sed ornare,
        felis eget volutpat sodales, metus ligula eleifend ante, non pulvinar
        tellus quam ac est. Duis congue viverra tortor nec tincidunt. Phasellus
        eu blandit justo. In pharetra, libero fringilla scelerisque luctus, nibh
        diam suscipit tellus, eu tincidunt mi ipsum eget ligula. Sed egestas
        orci vitae mauris pharetra venenatis. Proin pretium iaculis mauris
        condimentum vulputate. Donec semper orci eu aliquam semper. Nullam vel
        sagittis arcu. Ut consequat, nisl at scelerisque lobortis, ipsum arcu
        commodo erat, et ornare velit nulla quis enim. Suspendisse potenti.
        Etiam viverra, magna vel mollis interdum, neque erat vulputate nunc, ut
        hendrerit urna ante vitae libero. Pellentesque non aliquam sem. Maecenas
        arcu lorem, mattis vel nulla et, egestas placerat risus. Duis ultricies
        sem turpis, ac dignissim justo vulputate ut. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Pellentesque tincidunt
        blandit risus nec egestas. Donec ex nibh, auctor a volutpat et,
        tristique vitae lacus. Praesent varius ex non ex porta finibus nec quis
        ex. Nullam lacinia, tellus ac condimentum tempor, leo mauris fermentum
        sem, non tempor augue enim nec justo. Nunc scelerisque, lacus nec rutrum
        tincidunt, dui ante gravida est, eu rutrum lorem mi ac mi. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Phasellus id quam ut dolor porttitor commodo. Ut gravida id metus
        ut commodo. Quisque tristique arcu sit amet tortor dapibus, ac tincidunt
        diam condimentum. In eu convallis velit, quis pretium arcu. Nulla
        lobortis metus sed velit ultricies scelerisque. Fusce neque dui,
        condimentum et eros sed, imperdiet volutpat erat. Mauris erat ex, semper
        vel nibh quis, sagittis eleifend justo. Vestibulum neque orci, imperdiet
        in ultricies quis, malesuada dictum turpis. Etiam efficitur augue est,
        vitae fermentum eros laoreet vitae. Praesent dictum nisl non est dictum
        tristique. Nunc sagittis posuere ipsum. Quisque arcu tellus, dictum ut
        nulla sit amet, semper auctor dolor. Nulla at tempus arcu. Cras at justo
        vitae massa placerat mattis eu eget neque. Ut consectetur purus eu nisl
        ornare, nec tempor diam fermentum. Donec mi nisi, scelerisque in
        suscipit vel, pharetra in turpis. Etiam elementum efficitur sapien et
        bibendum. Mauris non varius felis. Maecenas a quam elit. Fusce et
        hendrerit diam. Aliquam interdum, ipsum quis tempor condimentum, tortor
        lacus rutrum quam, sit amet fringilla mauris risus ac enim. Etiam
        vulputate tincidunt ante, quis aliquet est aliquet in. Phasellus id diam
        nec erat vulputate varius. Nunc sed feugiat urna, eget pellentesque mi.{" "}
      </div>
        <a className="about__resume" download href="/Daniel Li - Web Developer Resume.pdf">
          <ArticleIcon className="about__resumeIcon" /> Download Resume (44.7 KB)
        </a>
    </div>
  );
}

export default About;
