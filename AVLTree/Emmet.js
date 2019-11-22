/**
 * Emmet 使用css选择器的语法来生成代码,介绍插件的地址http://www.iteye.com/news/27580
 * 现在要求使用类或者函数实现相类似的功能
 * 示例:
 * 输入:div>p>span
 * 输出:
 * <div>
 *     <p>
 *         <span></span>
 *     <p>
 * </div>
 * 示例2：
 * 输入： div#haha.class1.class2[name=dd type=text]{hhh};
 * 输出:
 * <div class="class1 class2" id="haha" type="text">hhh</div>
 * 示例3:
 * 输入：div>p{div的下级}+span{p的平级}^div{从下级中出来了}
 * 输出:
 *  <div>
 *      <p>div的下级</p>
 *      <span>p的平级</span>
 *  </div>
 *  <div>从下级中出来了</div>
 * 示例4:
 * 输入：div.class1[align=center style=display:none autofocus]{别忘了要}+p{和其他功能}>span{兼容哦}
 * 输出:
 *  <div class="class1" align="center" style="display:none" autofocus>别忘了要</div>
 *  <p>和其他功能<span>兼容哦</span></p>
 * 示例5:
 * 输入：table>tr>td{高难度}*3
 * 输出：
 *   <table>
 *       <tr>
 *           <td>高难度</td>
 *           <td>高难度</td>
 *           <td>高难度</td>
 *       </tr>
 *   </table>
 * 示例6
 * 输入：table>(tr>td{高难度}*3)*4
 * 输出：
 *  <table>
 *      <tr>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *      </tr>
 *      <tr>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *      </tr>
 *      <tr>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *      </tr>
 *      <tr>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *          <td>高难度</td>
 *      </tr>
 *  </table>
 *
 *  规则定义如下:
 *    不同标签之间有三种关系 '>','+','^'分别包含,平级,跳出回到上一级
 *    '#'表示id属性，'.'表示class属性，中包括[]存放的是标签内其他属性，大括号{}表示文字,'*'表示重复几次
 *     最终的输出格式可以和示例不同,只要内容正确即可
 */
