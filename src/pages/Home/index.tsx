import React from "react";
import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTopList } from "../../hooks";
import { TopItem } from "../../types";
import "./home.css";
import { arrowForward } from "ionicons/icons";

const findFirstImgFromItems = (items: TopItem[]): string | undefined =>
  items.find((item) => item.img !== undefined)?.img;

const Home = () => {
  const { list } = useTopList();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Liste des top</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="homePage">
        <IonList>
          <IonListHeader>Votre liste de top</IonListHeader>
          {list.map((l, i) => {
            const { title, items } = l;
            const img = findFirstImgFromItems(items);
            return (
              <IonItem
                key={i}
                className={`${i % 2 === 0 ? "even" : "odd"} ${
                  i + 1 === list.length ? "last" : ""
                }`}
                routerLink={`/view/${title}`}
              >
                {img && (
                  <IonAvatar>
                    <img src={img} />
                  </IonAvatar>
                )}
                <IonLabel>{title}</IonLabel>
                <IonIcon icon={arrowForward} color="black" />
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
