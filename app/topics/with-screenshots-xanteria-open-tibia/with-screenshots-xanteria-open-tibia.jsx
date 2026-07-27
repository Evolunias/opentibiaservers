import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-open-tibia');
}

export default function WithScreenshotsXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-open-tibia" />;
}
