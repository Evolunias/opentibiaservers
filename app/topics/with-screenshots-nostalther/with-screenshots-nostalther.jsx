import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther');
}

export default function WithScreenshotsNostaltherKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther" />;
}
