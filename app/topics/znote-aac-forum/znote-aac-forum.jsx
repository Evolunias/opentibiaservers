import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-forum');
}

export default function ZnoteAacForumKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-forum" />;
}
