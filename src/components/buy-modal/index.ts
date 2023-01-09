import { Component } from "../../helpers/component";
import "./index.scss";
import template from "./template.html";

type State = null;

export class BuyModalComponent extends Component<State> {
  $desc: HTMLDivElement | null = null;

  constructor(state: State) {
    super({ template, state });
  }
}
