import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria');
}

export default function WithScreenshotsXanteriaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria" />;
}
