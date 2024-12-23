import { useEffect, useRef } from 'react';
import EditorJS, { EditorConfig, ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import debounce from 'lodash.debounce';

interface IProps {
    presetData?: any;
    onChange: (data: any) => void;
}

const Editor: React.FC<IProps> = ({ presetData, onChange }) => {
    const editorInstance = useRef(null);

    useEffect(() => {
        if (!editorInstance.current) {
            const editorConfig: EditorConfig = {
                holder: 'editorjs',
                tools: {
                    header: {
                        class: Header as unknown as ToolConstructable,
                        inlineToolbar: [ 'link' ],
                        config: {
                            levels: [1], // Only allow H1-level headers
                            defaultLevel: 1,
                            placeholder: "Hello World!"
                        },
                    },
                    list: List,
                    image: {
                        class: ImageTool,
                        config: {
                            endpoints: {
                                byFile: '/api/upload',
                                byUrl: '/api/fetchUrl',
                            },
                        },
                    },
                },
                data: presetData ?? {
                    blocks: [
                        {
                            type: 'header',
                            data: {
                                text: ''
                            },
                        },
                    ],
                },
                onChange: async (api, event) => {
                  const savedData = await api.saver.save();
                  handleDataChange(savedData);
                },
                autofocus: true
            };

            editorInstance.current = new EditorJS(editorConfig);
        };
    }, [presetData]);

    const handleDataChange = debounce((data) => onChange(data), 300);

    return (
        <div id="editorjs" className="h-96 text-night dark:text-gray-300"></div>
    );
};

export default Editor;
