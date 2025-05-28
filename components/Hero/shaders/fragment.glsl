uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    vec2 pos = uv * 2.0 - 1.0;
    pos.x *= resolution.x/resolution.y;
    
    float d = length(pos);
    vec3 color = vec3(0.0);
    
    // Create mysterious flowing patterns
    float t = time * 0.2;
    float a = atan(pos.y, pos.x);
    float r = length(pos) * 2.0;
    
    // Layered wave patterns
    float wave1 = sin(r * 3.0 - t) * 0.5 + 0.5;
    float wave2 = sin(a * 5.0 + t) * 0.5 + 0.5;
    float wave3 = sin(r * 2.0 + a * 3.0 - t * 1.5) * 0.5 + 0.5;
    
    // Combine waves with dark mysterious colors
    color += vec3(0.1, 0.0, 0.2) * wave1;
    color += vec3(0.0, 0.1, 0.3) * wave2;
    color += vec3(0.2, 0.0, 0.4) * wave3;
    
    // Add subtle glow
    color += vec3(0.1, 0.0, 0.2) / (d + 0.5);
    
    gl_FragColor = vec4(color, 1.0);
}