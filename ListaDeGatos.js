import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente para exibir um card expansível
const TagCard = ({ tag }) => {
  const [expanded, setExpanded] = useState(false);
  const [catIds, setCatIds] = useState([]);

  // Função para expandir ou recolher o card
  const toggleExpand = async () => {
    if (!expanded) {
      try {
        const response = await axios.get(`https://cataas.com/api/cats`);
        const filteredCatIds = response.data
          .filter(cat => cat.tags.includes(tag)) // Filtra apenas os gatos que têm a tag selecionada
          .map(cat => cat._id); // Mapeia para obter apenas os IDs dos gatos filtrados
        setCatIds(filteredCatIds);
      } catch (error) {
        console.error('Erro ao obter IDs dos gatos:', error);
      }
    }
    setExpanded(!expanded);
  };

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
      <h3 style={{ cursor: 'pointer' }} onClick={toggleExpand}>{tag}</h3>
      {expanded && (
        <ul>
          {catIds.map(id => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Componente principal para exibir a lista de gatos
const ListaDeGatos = () => {
  const [tags, setTags] = useState([]);

  // Requisição para obter as tags
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cataas.com/api/tags');
        setTags(response.data);
      } catch (error) {
        console.error('Erro ao obter tags:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: '60px'}}>
      {tags.map(tag => (
        <TagCard key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default ListaDeGatos;
