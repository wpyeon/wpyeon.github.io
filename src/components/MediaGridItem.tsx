import styles from "./styles/mediaGridItem.module.css";
import DevChip, { ChipProps } from "./Chips";

export interface MediaGridItemProps {
  imgSrc: string;
  title: string;
  chipTypes: string[];
}

export default function MediaGridItem({ imgSrc, title, chipTypes }: MediaGridItemProps) {
  return (
    <div className={styles.container}>
      <img className={styles.bannerImage} src={imgSrc} alt={"Project Image"} />
      <div className={styles.footerContainer}>
        <div className={styles.footerTitleText}>
          {title ? title : "Project"}
        </div>
        <div className={styles.chipsContainer}>
          {chipTypes.map((chipType) => (
            <DevChip key={chipType} type={chipType} />
          ))}
        </div>
      </div>
    </div>
  );
}
