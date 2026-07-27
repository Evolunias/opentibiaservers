import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-tibia');
}

export default function WithScreenshotsRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-tibia" />;
}
