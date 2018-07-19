<?php

namespace AppBundle\Repository;
use Doctrine\ORM\Query\Expr\Join;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserRepository extends \Doctrine\ORM\EntityRepository
{

    public function findCoproByAdresse($idUser, $search){
        $fields = array('u.id', 'c.id','c.adresse', 'c.ville', 'c.name', 'c.codePostal');
        return $this->createQueryBuilder('u')
            ->select($fields)
            ->join('u.copros', 'c')
            ->where('u.id = :idUser')
            ->setParameter('idUser', $idUser)
            ->andWhere('c.name LIKE :search')
            ->setParameter('search','%'. $search.'%')
            ->getQuery()
            ->getResult()
            ;
    }
    public function findAllCoproByAdresse($idUser){
        $fields = array('u.id', 'c.id','c.adresse', 'c.ville', 'c.name', 'c.codePostal');
        return $this->createQueryBuilder('u')
            ->select($fields)
            ->join('u.copros', 'c')
            ->where('u.id = :idUser')
            ->setParameter('idUser', $idUser)
            ->getQuery()
            ->getResult()
            ;
    }

    public function listUsersFromSyndic($idSyndic){
        $fields = array('u.firstname', 'u.lastname','u.phone','u.email','u.adresse','u.codePostal','u.ville','u.roles', 's.nom');
        return $this->createQueryBuilder('u')
            ->select($fields)
            ->join('u.syndics', 's')
            ->where('s.id = :idSyndic')
            ->setParameter('idSyndic', $idSyndic)
            ->getQuery()
            ->getResult()
            ;
    }

    public function listUsersFromAssociation($idAssociation){
        $fields = array('u.firstname', 'u.lastname','u.phone','u.email','u.adresse','u.codePostal','u.ville','u.roles', 'a.name');
        return $this->createQueryBuilder('u')
            ->select($fields)
            ->join('u.associationCoPros', 'a')
            ->where('a.id = :idAssociation')
            ->setParameter('idAssociation', $idAssociation)
            ->getQuery()
            ->getResult()
            ;
    }
}
/*
 SELECT concat(user.lastname, ' ' , user.firstname) nom, user.roles, syndic.nom
FROM user
  LEFT OUTER JOIN user_syndic
    ON user.id = user_syndic.user_id
  LEFT OUTER JOIN syndic
    ON user_syndic.syndic_id = syndic.id
where user_syndic.syndic_id = 1
 */
