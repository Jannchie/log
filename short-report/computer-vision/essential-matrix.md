---
title: Essential Matrix
createdAt: Wed, 26 May 2021 13:44:29 +0900
updatedAt: Wed, 26 May 2021 13:44:21 +0900
lang: en-US
---

You can take two pictures of the same object from different angles. These two pictures combined, can obtain three-dimensional object information. The tool that describes the relationship between the two photos is called **EpiPolar Geometry**.

![EpiPolar Geometry](https://i.loli.net/2021/05/26/ju5mBgviT89EIoU.png)

These two image points are denoted by $e_L$ and $e_R$ respectively and are called **epipolar points**. The points $X$, $O_L$ and $O_R$ that form a plane called the **epipolar plane**. The lines that intersect the polar plane with the images of the two cameras are called **epipolar line**.

The **essential matrix** reflects the relationship between a point in space and the camera coordinate system under different camera angles.

So that any point X in space that is not on the plane of the two images, the projection coordinates of $X_L$ and $X_R$ on the two images, satisfy this equation:

$$
(X_L)^T E X_R = 0
$$

where $E$ called essential matrix.

This matrix has the following properties:

The Rank of this matrix is 2 and it's a 3 by 3 matrix.

The essential matrix provides a constraint from three-dimensional points to two-dimensional points.
