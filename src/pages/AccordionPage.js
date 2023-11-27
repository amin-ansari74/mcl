import "../index.css";
import Accordion from "../Accordion";

const AccordionPage = () => {
  const items = [
    {
      label: "what is mcl?",
      content:
        "a mcl match is a duel or ligue match with one or several rivals",
    },
    {
      label: "why you should play a mcl match?",
      content:
        "cause you enjoy playing it and to earn glory and honor in front of the gods",
    },
    {
      label: "what do you call a duel to death mcl combat?",
      content: "it called MAK'GORA and it is sacred",
    },
    {
      label: "what happens when i win a mcl?",
      content:
        "your win in a mcl match means you have won your rival's mother and you can do anything you want to her",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
