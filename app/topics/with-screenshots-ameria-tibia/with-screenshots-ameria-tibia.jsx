import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-tibia');
}

export default function WithScreenshotsAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-tibia" />;
}
