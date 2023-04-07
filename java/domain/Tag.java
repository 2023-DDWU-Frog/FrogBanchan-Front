import java.io.Serializable;

@SuppressWarnings("serial")
public class Tag implements Serializable {

    /* Private Fields */
    private int tagId;
    private String name;

    /* JavaBeans Properties */
    public int getTagId() {
        return tagId;
    }
    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
}