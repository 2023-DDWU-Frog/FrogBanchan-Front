import java.io.Serializable;
import java.sql.Timestamp;

@SuppressWarnings("serial")
public class History implements Serializable {

    /* Private Fields */
    private String username;
    Timestamp recordedDate;  // 이거 이렇게 하는거 맞나요..?
    private int menuId;
    private int placeId;
    private int score;

    /* JavaBeans Properties */
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public Timestamp getRecordedDate() {
        return recordedDate;
    }
    public void setRecordedDate(Timestamp recordedDate) {
        this.recordedDate = recordedDate;
    }

    public int getMenuId() {
        return menuId;
    }
    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public int getPlaceId() {
        return placeId;
    }
    public void setPlaceId(int placeId) {
        this.placeId = placeId;
    }

    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
}