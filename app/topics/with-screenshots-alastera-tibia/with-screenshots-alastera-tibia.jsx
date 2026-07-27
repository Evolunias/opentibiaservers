import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-tibia');
}

export default function WithScreenshotsAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-tibia" />;
}
