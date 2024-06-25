import MicIcon from '@mui/icons-material/Mic';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime';
import clienteAxios from '../config/clientAxios';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        userId: '601d1f4e28c1b147f4a0b123',
        registrationEase: '',
        dashboardNavigation: '',
        taskCompletionTime: '',
        taskCompletionReasonable: '',
        overallExperience: '',
        accessibilityIssues: '',
        assistiveTechPerformance: '',
        uiConsistency: '',
        feedbackOnActions: '',
        documentationHelpfulness: '',
        findingHelp: '',
        voiceFeedback: '', // Nuevo campo para feedback de voz
    });

    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (!listening) {
            setFormData((prevFormData) => ({ ...prevFormData, voiceFeedback: transcript }));
        }
    }, [listening, transcript]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <span>Browser does not support speech recognition.</span>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleListening = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica que todos los campos obligatorios estén completos
        const requiredFields = [
            'userId',
            'registrationEase',
            'dashboardNavigation',
            'taskCompletionTime',
            'taskCompletionReasonable',
            'overallExperience',
            'accessibilityIssues',
            'assistiveTechPerformance',
            'uiConsistency',
            'feedbackOnActions',
            'documentationHelpfulness',
            'findingHelp'
        ];

        for (const field of requiredFields) {
            if (!formData[field]) {
                console.error(`Field ${field} is required but empty.`);
                return;
            }
        }

        try {
            const response = await clienteAxios.post('/feedback', formData);
            console.log('Feedback submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Cuestionario de Satisfacción del Usuario</h2>

                {/* Facilidad de Uso */}
                <label className="block mb-2">¿Encontraste fácil registrarte y configurar tu cuenta?</label>
                <select name="registrationEase" value={formData.registrationEase} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Muy fácil">Muy fácil</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Difícil">Difícil</option>
                    <option value="Muy difícil">Muy difícil</option>
                </select>

                <label className="block mb-2">¿Pudiste navegar por el dashboard sin problemas?</label>
                <select name="dashboardNavigation" value={formData.dashboardNavigation} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Muy fácil">Muy fácil</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Difícil">Difícil</option>
                    <option value="Muy difícil">Muy difícil</option>
                </select>

                <label className="block mb-2">¿Cuánto tiempo tomaste en completar las tareas?</label>
                <select name="taskCompletionTime" value={formData.taskCompletionTime} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Menos de 5 minutos">Menos de 5 minutos</option>
                    <option value="5-10 minutos">5-10 minutos</option>
                    <option value="10-15 minutos">10-15 minutos</option>
                    <option value="Más de 15 minutos">Más de 15 minutos</option>
                </select>

                <label className="block mb-2">¿Consideras que las tareas se completaron en un tiempo razonable?</label>
                <select name="taskCompletionReasonable" value={formData.taskCompletionReasonable} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                <label className="block mb-2">¿Estás satisfecho con la experiencia general del sistema?</label>
                <select name="overallExperience" value={formData.overallExperience} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Muy satisfecho">Muy satisfecho</option>
                    <option value="Satisfecho">Satisfecho</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Insatisfecho">Insatisfecho</option>
                    <option value="Muy insatisfecho">Muy insatisfecho</option>
                </select>

                <label className="block mb-2">¿Tuviste problemas para acceder o utilizar alguna funcionalidad del sistema?</label>
                <select name="accessibilityIssues" value={formData.accessibilityIssues} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                </select>

                <label className="block mb-2">¿El sistema se comportó bien con tecnologías de asistencia (si aplica)?</label>
                <select name="assistiveTechPerformance" value={formData.assistiveTechPerformance} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                <label className="block mb-2">¿La interfaz fue consistente y fácil de entender?</label>
                <select name="uiConsistency" value={formData.uiConsistency} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                <label className="block mb-2">¿Recibiste retroalimentación inmediata sobre tus acciones?</label>
                <select name="feedbackOnActions" value={formData.feedbackOnActions} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                <label className="block mb-2">¿Los cursos proporcionados fueron útiles?</label>
                <select name="documentationHelpfulness" value={formData.documentationHelpfulness} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                <label className="block mb-2">¿Encontraste fácilmente la ayuda que necesitabas?</label>
                <select name="findingHelp" value={formData.findingHelp} onChange={handleChange} className="mb-4 p-2 w-full border rounded">
                    <option value="">Selecciona una opción</option>
                    <option value="Totalmente de acuerdo">Totalmente de acuerdo</option>
                    <option value="De acuerdo">De acuerdo</option>
                    <option value="Neutral">Neutral</option>
                    <option value="En desacuerdo">En desacuerdo</option>
                    <option value="Totalmente en desacuerdo">Totalmente en desacuerdo</option>
                </select>

                {/* Agregar reconocimiento de voz a la satisfacción general */}
                <label className="block mb-2">Describe tu experiencia general con el sistema:</label>
                <div className="relative mb-4">
                    <textarea
                        name="voiceFeedback"
                        value={formData.voiceFeedback}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required={false} // Permitir vacío
                    />
                    <button
                        type="button"
                        onClick={toggleListening}
                        className={`absolute top-0 right-0 mt-2 mr-2 ${listening ? 'bg-red-500' : 'bg-blue-500'} text-white p-2 rounded-full`}
                    >
                        <MicIcon />
                    </button>
                </div>
                
                <button type="submit" className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
