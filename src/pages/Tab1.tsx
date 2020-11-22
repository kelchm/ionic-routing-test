import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import { useHistory, useParams, useLocation } from "react-router";

const Tab1: React.FC = () => {
  const history = useHistory();
  const params: any = useParams();
  const location = useLocation();

  let routeState: any = location.state || {};
  let counter = parseInt(routeState.counter || params.id, 10) || 1;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        Current counter: {counter}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>
                Route to the same Page via route state (does not trigger
                rerender)
              </IonText>
              <IonButton
                onClick={() =>
                  history.push("/tab1", {
                    counter: counter + 1,
                  })
                }
              >
                Route
              </IonButton>
            </IonCol>
            <IonCol>
              <IonText>
                Route to the same Page via route param (triggers rerender)
              </IonText>
              <IonButton onClick={() => history.push("/tab1/" + (counter + 1))}>
                Route
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
