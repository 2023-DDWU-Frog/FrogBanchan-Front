import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class Menu implements Serializable {

    /* Private Fields */
    private int menuId;
    private String name;
    private List<Tag> tagList = new ArrayList<Tag>();

    /* JavaBeans Properties */
    public int getMenuId() {
        return menuId;
    }
    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }

    public List<Tag> getTagList() {
        return tagList;
    }
    public void setTagList(List<Tag> tagList) {
        this.tagList = tagList;
    }

    /* Public Methods */

}