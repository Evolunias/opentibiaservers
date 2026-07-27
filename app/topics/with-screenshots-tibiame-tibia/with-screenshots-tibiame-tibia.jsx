import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-tibia');
}

export default function WithScreenshotsTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-tibia" />;
}
