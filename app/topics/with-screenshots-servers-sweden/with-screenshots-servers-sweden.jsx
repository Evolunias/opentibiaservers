import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-sweden');
}

export default function WithScreenshotsServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-sweden" />;
}
