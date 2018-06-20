<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * associationCoPro
 *
 * @ORM\Table(name="association_co_pro")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\associationCoProRepository")
 */
class associationCoPro
{
    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CoPro", inversedBy="cotests")
     * @ORM\JoinColumn(nullable=false)
     */
    private $cotest;

    /**
     * Many associationCoPro have Many Prestataire.
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Prestataire", cascade={"persist"})
     */
    private $Prestataires;


    public function __toString()
    {
        // TODO: Implement __toString() method.
        return $this->name;
    }

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string|null $name
     *
     * @return associationCoPro
     */
    public function setName($name = null)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set cotest.
     *
     * @param \AppBundle\Entity\CoPro $cotest
     *
     * @return associationCoPro
     */
    public function setCotest(\AppBundle\Entity\CoPro $cotest)
    {
        $this->cotest = $cotest;

        return $this;
    }

    /**
     * Get cotest.
     *
     * @return \AppBundle\Entity\CoPro
     */
    public function getCotest()
    {
        return $this->cotest;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->Prestataires = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add prestataire.
     *
     * @param \AppBundle\Entity\Prestataire $prestataire
     *
     * @return associationCoPro
     */
    public function addPrestataire(\AppBundle\Entity\Prestataire $prestataire)
    {
        $this->Prestataires[] = $prestataire;

        return $this;
    }

    /**
     * Remove prestataire.
     *
     * @param \AppBundle\Entity\Prestataire $prestataire
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removePrestataire(\AppBundle\Entity\Prestataire $prestataire)
    {
        return $this->Prestataires->removeElement($prestataire);
    }

    /**
     * Get prestataires.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPrestataires()
    {
        return $this->Prestataires;
    }
}
