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
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\CoPro", mappedBy="copropriete")
     */
    private $assoCopros;

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
     * Constructor
     */
    public function __construct()
    {
        $this->assoCopros = new \Doctrine\Common\Collections\ArrayCollection();
        $this->Prestataires = new \Doctrine\Common\Collections\ArrayCollection();
    }

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
     * Add assoCopro.
     *
     * @param \AppBundle\Entity\CoPro $assoCopro
     *
     * @return associationCoPro
     */
    public function addAssoCopro(\AppBundle\Entity\CoPro $assoCopro)
    {
        $this->assoCopros[] = $assoCopro;

        return $this;
    }

    /**
     * Remove assoCopro.
     *
     * @param \AppBundle\Entity\CoPro $assoCopro
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeAssoCopro(\AppBundle\Entity\CoPro $assoCopro)
    {
        return $this->assoCopros->removeElement($assoCopro);
    }

    /**
     * Get assoCopros.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAssoCopros()
    {
        return $this->assoCopros;
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
