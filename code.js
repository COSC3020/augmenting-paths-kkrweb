// Kane Kriz
// UWYO COSC 3020 Algorithms
// Augmenting Paths exercise - primary js file
// 21 April 2025
//


//



function augmentingPath(graph, startNode, endNode) 
{
    if(startNode == endNode) //early check, start and end are same node
    {
        return [startNode];
    }

    var visitedNodes = {};
    var parentMap = {};
    var nodeQueue = [startNode];
    
    var pathExists = false;
    visitedNodes[startNode] = true;
    

    for(var index = 0; index < nodeQueue.length; index++) 
    {
        var currentNode = nodeQueue[index];
        var neighborNodes;
        
        if((graph[currentNode] !== undefined) && (graph[currentNode] !== null))
        {
            neighborNodes = graph[currentNode];
        } 
            
        else 
        {
            neighborNodes = {};
        }

        for(var neighborNode in neighborNodes) 
        {
            if((!visitedNodes[neighborNode]) && (neighborNodes[neighborNode] > 0)) 
            {
                parentMap[neighborNode] = currentNode;
                visitedNodes[neighborNode] = true;
                nodeQueue.push(neighborNode);

                if(neighborNode == endNode) 
                {
                    pathExists = true;
                    index = nodeQueue.length;
                    break;
                }
            }
        }
    }

    if(pathExists)
    {
        var pathNodes = [];
        var pathNode = endNode;
        
        while(pathNode != startNode) 
        {
            pathNodes.unshift(pathNode);
            pathNode = parentMap[pathNode];
        }
        
        pathNodes.unshift(startNode);
        return pathNodes;
    }

    return [];
}


//
