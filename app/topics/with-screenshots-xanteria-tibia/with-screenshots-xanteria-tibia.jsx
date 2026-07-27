import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-tibia');
}

export default function WithScreenshotsXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-tibia" />;
}
