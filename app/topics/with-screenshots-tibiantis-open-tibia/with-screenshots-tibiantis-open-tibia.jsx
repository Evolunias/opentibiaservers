import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-open-tibia');
}

export default function WithScreenshotsTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-open-tibia" />;
}
