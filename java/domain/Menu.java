import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
public class Menu implements Serializable {

    /* Private Fields */
    private int menu_id;
    private String name;
    private List<String> tag_list = new ArrayList<String>();

    /* JavaBeans Properties */
    public int getMenu_id() {
        return menu_id;
    }
    public void setMenu_id(int menu_id) {
        this.menu_id = menu_id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public List<String> getTag_list() {
        return tag_list;
    }
    public void setTag_list(List<String> tag_list) {
        this.tag_list = tag_list;
    }

    /* Public Methods */
    public String toString() {
        return getName();
    }
}