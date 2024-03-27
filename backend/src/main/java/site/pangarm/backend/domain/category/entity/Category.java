package site.pangarm.backend.domain.category.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import site.pangarm.backend.domain.membercategory.entity.MemberCategory;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; //뉴스 카테고리 아이디

    @Column(nullable = false, unique = true)
    private String name; //카테고리 이름

    @OneToMany(mappedBy = "category")
    private List<MemberCategory> memberCategoryList = new ArrayList<>();

    @Builder
    public Category(String name) {
        this.name = name;
    }

    public static Category of(String name){
        return new Category(name);
    }

    public Category update(Category category) {
        this.name = category.getName();
        return this;
    }

}
