uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform vec3 fogColor;
uniform float fogDensity;
varying float vElevation;
varying vec3 vWorldPosition;


void main()
{
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor,uSurfaceColor,mixStrength );

    float distance = length(vWorldPosition - cameraPosition);
    float fogFactor = 1.0 - exp(-pow(distance * fogDensity, 2.0));
gl_FragColor = mix(vec4(color, 1.0), vec4(fogColor, 1.0), fogFactor);
}