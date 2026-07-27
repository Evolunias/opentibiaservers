import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-open-tibia');
}

export default function WithScreenshotsShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-open-tibia" />;
}
